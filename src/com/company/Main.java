package com.company;

import jodd.json.JsonParser;
import jodd.json.JsonSerializer;
import org.h2.tools.Server;
import spark.Spark;

import java.sql.*;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) throws SQLException {
        Server.createWebServer().start();
        Connection conn = DriverManager.getConnection("jdbc:h2:./main");
        createTable(conn);
        Spark.externalStaticFileLocation("public");
        Spark.init();

        if (count(conn,"movies") == 0) {
            Movie movie = new Movie(1,"22 Jump Street","Phil Lord","Two cops go to college.","New Orleans","http://www4.pictures.zimbio.com/pc/Channing+Tatum+Jonah+Hill+team+up+film+scene+vV7creh7xKkl.jpg");
            insertMovie(conn,movie);
        }

        Spark.get(
                "/movie",
                (request,response) -> {
                    ArrayList<Movie> users = selectMovies(conn);
                    JsonSerializer serializer = new JsonSerializer();
                    return serializer.deep(true).serialize(users);
                }
        );

        Spark.post(
                "/movie",
                (request,response) -> {
                    String body = request.body();
                    JsonParser parser = new JsonParser();
                    Movie movie = parser.parse(body,Movie.class);
                    insertMovie(conn,movie);
                    return "";
                }
        );

        Spark.put(
                "/movie",
                (request, response) -> {
                    String body = request.body();
                    JsonParser parser = new JsonParser();
                    Movie movie = parser.parse(body,Movie.class);
                    editMovie(conn,movie);
                    return "";
                }
        );

        Spark.delete(
                "/movie/:id",
                (request,response) -> {
                    JsonParser parser = new JsonParser();
                    int id = parser.parse(request.params(":id"));
                    deleteMovie(conn,id);
                    return "";
                }
        );
    }

    public static void createTable(Connection conn) throws SQLException {
        Statement stmt = conn.createStatement();
        stmt.execute("CREATE TABLE IF NOT EXISTS movies (id IDENTITY,title VARCHAR,director VARCHAR,description " +
                "VARCHAR,location VARCHAR,location_image VARCHAR)");
    }


    public static void insertMovie(Connection conn,Movie movie) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO movies VALUES (null,?,?,?,?,?)");
        stmt.setString(1,movie.title);
        stmt.setString(2,movie.director);
        stmt.setString(3,movie.description);
        stmt.setString(4,movie.location);
        stmt.setString(5,movie.locationImg);
        stmt.execute();
    }

    public static ArrayList<Movie> selectMovies (Connection conn) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("SELECT * FROM movies");
        ArrayList<Movie> movies = new ArrayList<>();
        ResultSet results = stmt.executeQuery();
        while (results.next()) {
            int id = results.getInt("id");
            String title = results.getString("title");
            String director = results.getString("director");
            String description = results.getString("description");
            String location = results.getString("location");
            String locationImage = results.getString("location_image");
            Movie movie = new Movie(id,title,director,description,location,locationImage);
            movies.add(movie);
        }
        return movies;
    }

    public static Movie editMovie(Connection conn,Movie movie) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("UPDATE movies SET title = ?,director = ?,description = ?" +
                ",location = ?,location_image = ? WHERE id = ?");
        stmt.setString(1,movie.title);
        stmt.setString(2,movie.director);
        stmt.setString(3,movie.description);
        stmt.setString(4,movie.location);
        stmt.setString(5,movie.locationImg);
        stmt.setInt(6,movie.id);
        stmt.execute();
        return new Movie(movie.id,movie.title,movie.director,movie.description,movie.location,movie.locationImg);
    }

    public static void deleteMovie (Connection conn,int id) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("DELETE FROM movies WHERE id = ?");
        stmt.setInt(1,id);
        stmt.execute();
    }

    public static int count (Connection conn, String table) throws SQLException {
        Statement stmt = conn.createStatement();
        ResultSet results = stmt.executeQuery("SELECT COUNT(*) FROM " + table);
        if (results.next()) {
            return results.getInt(1);
        }
        return 0;

    }
}
