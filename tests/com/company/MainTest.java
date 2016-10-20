package com.company;

import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;

import static org.junit.Assert.*;

/**
 * Created by Troy on 10/20/16.
 */
public class MainTest {
    public Connection startConnection () throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:h2:mem:test");
        Main.createTable(conn);
        return conn;
    }

    @Test
    public void testUser() throws SQLException {
        Connection conn = startConnection();
        Movie movie = new Movie(1,"Troy","Brad Pitt","Greek Movie","Greece","Greek Image");
        Main.insertMovie(conn,movie);
        ArrayList<Movie> movies = Main.selectMovies(conn);
        conn.close();
        assertTrue(movies.size() == 1);
    }

    @Test
    public void testEdit() throws SQLException {
        Connection conn = startConnection();
        Movie movie = new Movie(1,"Troy","Brad Pitt","Greek Movie","Greece","Greek Image");
        Main.insertMovie(conn,movie);
        movie = new Movie(1,"Simple Jack","Ben Stiller","Fake Movie","Vietnam","Vietnam Image");
        Main.editMovie(conn,movie);
        conn.close();
        assertTrue(movie.title.equals("Simple Jack"));
    }

    @Test
    public void testDelete() throws SQLException {
        Connection conn = startConnection();
        Movie movie = new Movie(1,"Troy","Brad Pitt","Greek Movie","Greece","Greek Image");
        Main.insertMovie(conn,movie);
        Main.deleteMovie(conn,1);
        ArrayList<Movie> movies = Main.selectMovies(conn);
        conn.close();
        assertTrue(movies.size() == 0);
    }

}