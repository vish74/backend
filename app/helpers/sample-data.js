//models
var User = require('../models/user');
var Show = require('../models/show');

exports.loadData(){
    var lucasUser = new User({ "name" : "Lucas Farah", "personality" : "{\"Neuroticism\" : 0.23852331727306597, \"Openness\" : 0.19985873018309458, \"Extroversion\" : 0.5250972377475239, \"Conscientiousness\" : 0.6896876186993252, \"Agreeableness\" : 0.4824766686919894}"});

    lucasUser.save(function(err){
        if(err){console.log(err);}
    });

    var show1 = new Show({"name" : "Game of Thrones", "description" : "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, return after thousands of years in the North.", "personality" : "{\"Neuroticism\" : 0.43852331727306597, \"Openness\" : 0.53985873018309458, \"Extroversion\" : 0.3250972377475239, \"Conscientiousness\" : 0.9896876186993252, \"Agreeableness\" : 0.6824766686919894}", "tone" : "{\"Anger\": 0.65324, \"Disgust\": 0.15324, \"Fear\": 0.25324, \"Joy\": 0.55324, \"Sadness\": 0.85324, \"Analytical\": 0.75324,  \"Confident\": 0.95324,  \"Tentative\": 0.75324,  \"Anger\": 0.15324}", "picURL" : "http://www.osunatierradedragones.es/images/drgon.jpg", "episodeDuration" : 60, "numberOfSeasons" : 5, "whereToWatch" : "http://www.hbogo.com/game-of-thrones-interactive-features/"});
    show1.save(function(err){
        if(err){console.log(err);}
    });

    var show2 = new Show(function(err){"name" : "The Expanse", "description" : "A police detective in the asteroid belt, the first officer of an interplanetary ice freighter and an earth-bound United Nations executive slowly discover a vast.", "personality" : "{\"Neuroticism\" : 0.63852331727306597, \"Openness\" : 0.33985873018309458, \"Extroversion\" : 0.1250972377475239, \"Conscientiousness\" : 0.2896876186993252, \"Agreeableness\" : 0.8824766686919894}", "tone" : {"Anger": 0.15324, "Disgust": 0.55324, "Fear": 0.35324, "Joy": 0.25324, "Sadness": 0.65324, "Analytical": 0.95324,  "Confident": 0.35324,  "Tentative": 0.55324,  "Anger": 0.85324}, "picURL" : "http://cdn.hitfix.com/photos/6170220/The-Expanse-header.jpg", "episodeDuration" : 60, "numberOfSeasons" : 1, "whereToWatch" : "http://www.syfy.com/theexpanse/episodes"});
    show2.save({
        if(err){console.log(err);}
    });

    var show3 = new Show(function(err){ "name" : "Sense8", "description" : "A group of people around the world are suddenly linked mentally, and must find a way to survive being.", "personality" : "{\"Neuroticism\" : 0.43852331727306597, \"Openness\" : 0.13985873018309458, \"Extroversion\" : 0.5250972377475239, \"Conscientiousness\" : 0.4896876186993252, \"Agreeableness\" : 0.7824766686919894}", "tone" : "{\"Anger\": 0.95324, \"Disgust\": 0.75324, \"Fear\": 0.25324, \"Joy\": 0.15324, \"Sadness\": 0.75324, \"Analytical\": 0.55324,  \"Confident\": 0.15324,  \"Tentative\": 0.65324,  \"Anger\": 0.55324}", "picURL" : "https://pbs.twimg.com/profile_images/606887678978572288/6SQ0c119.jpg", "episodeDuration" : 60, "numberOfSeasons" : 1, "whereToWatch" : "http://www.netflix.com/watch/80025744"});
    show3.save({
        if(err){console.log(err);}
    });
}