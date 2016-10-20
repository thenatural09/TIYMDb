package com.company;

/**
 * Created by Troy on 10/20/16.
 */
public class Movie {
    int id;
    String title;
    String director;
    String description;
    String location;
    String locationImg;

    public Movie(int id, String title, String director, String description, String location, String locationImg) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.description = description;
        this.location = location;
        this.locationImg = locationImg;
    }

    public Movie() {
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDirector() {
        return director;
    }

    public String getDescription() {
        return description;
    }

    public String getLocation() {
        return location;
    }

    public String getLocationImg() {
        return locationImg;
    }
}
