const destination = {
    forest: [
        {
            place: "lauterbrunnen",
            people: ["couple", "alone", "family", "friends"],
            activityLevel: "difficult"
        },
        {
            place: "kalalau",
            people: ["alone", "friends"],
            activityLevel: ["easy", "moderate"]
        },
        {
            place: "jasper",
            people: ["family", "couple"],
            activityLevel: ["easy", "moderate"]
        }
    ],
    desert: [
        {
            place: "zion",
            people: ["couple", "alone", "family", "friends"],
            activityLevel: "difficult"
        },
        {
            place: "laugavegur",
            people: ["alone", "friends"],
            activityLevel: ["easy", "moderate"]
        },
        {
            place: "tonto",
            people: ["family", "couple"],
            activityLevel: ["easy", "moderate"]
        }
    ],
    glacial: [
        {
            place: "fitzroytrek",
            people: ["couple", "alone", "family", "friends"],
            activityLevel: "difficult"
        },
        {
            place: "lagunaglacier",
            people: ["alone", "friends"],
            activityLevel: ["easy", "moderate"]
        },
        {
            place: "malignecanyon",
            people: ["family", "couple"],
            activityLevel: ["easy", "moderate"]
        }
    ]
};


$(function (event) {

    //MAIN START BUTTON FUNCTION

    $(".main-start-icon").on("click", function () {
        $('html,body').animate({
            scrollTop: $(".form-question-type").offset().top
        }, 2000);
    });

    //FORM FUNCTION

    $("form").on("submit", function (e) {

        e.preventDefault();

        const userChoiceType = $("input[name=place]:checked").val();
        const userChoicePeople = $("input[name=people]:checked").val();
        const userChoiceActivity = $("input[name=activity]:checked").val();

        const vacationType = destination[userChoiceType];

        const peopleChoice = vacationType.filter(function (type) {
            return type.people.includes(userChoicePeople) == true;
        });

        const activityChoice = peopleChoice.filter(function (type){
            return type.activityLevel.includes(userChoiceActivity) === true;
        });

        const result = activityChoice[0].place;

        $(`.${result}`).removeClass("active");

        $(`.${result}`).addClass("active");

        $("header").addClass("hidden");

        $("form").addClass("hidden");

        $('html,body').animate({
            scrollTop: $(`.${result}`).offset().top
        },1000);

    });

    //NEXT BUTTON FUNCTION

    const footprint = function (klass, delay, animation) {
        $(klass).delay(delay);
        $(klass).addClass(animation);
    }
    
    $(".button").on("click", function () {
        footprint(".footprint-left-1", 0, "animate");
        footprint(".footprint-right-1", 500, "animate");
        footprint(".footprint-left-2", 1000, "animate");
        footprint(".footprint-right-2", 1500, "animate");
        footprint(".footprint-left-3", 2000, "animate");

        setTimeout(function () {
            $(".animate").removeClass("animate");
        }, 4000);

        $('html,body').animate({
            scrollTop: $(".form-question-people").offset().top
        }, 4000);
    });


    $(".button2").on("click", function () {
        footprint(".footprint-left-4", 0, "animate");
        footprint(".footprint-right-3", 500, "animate");
        footprint(".footprint-left-5", 1000, "animate");
        footprint(".footprint-right-4", 1500, "animate");
        footprint(".footprint-left-6", 2000, "animate");

        setTimeout(function () {
            $(".animate").removeClass("animate");
        }, 4000);

        $('html,body').animate({
            scrollTop: $(".form-question-level").offset().top
        }, 4000);
    });

    //BACK BUTTON 

    $(".button3").on("click", function () {
        location.reload();
    })

});
