$(document).ready(function() {

    // Filtro das imagens
    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if (type == 'pa-btn') {
            eachBoxes('pa', boxes)
        } else if (type == 'bv-btn') {
            eachBoxes('bv', boxes);
        } else if (type == 'pq-btn') {
            eachBoxes('pq', boxes);
        } else if (type == 'ai-btn') {
            eachBoxes('ai', boxes);
        } else if (type == 'pc-btn') {
            eachBoxes('pc', boxes);
        } else if (type == 'hpm-btn') {
            eachBoxes('hpm', boxes)
        } else if (type == 'vph-btn') {
            eachBoxes('vph', boxes);
        } else if (type == 'prc-btn') {
            eachBoxes('prc', boxes);
        } else if (type == 'ppi-btn') {
            eachBoxes('ppi', boxes);
        } else {
            eachBoxes('all', boxes);
        }

    });

    function eachBoxes(type, boxes) {

        if(type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

    // Extras
    let container1 = document.getElementById("circle1");

    let circle1 = new ProgressBar.Circle(container1, {

        color: '#ff9800',
        strokeWidth: 7,
        duration: 2200,
        from: { color: '#AAAAAA' },
        to: { color: '#ff9800' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * +6394);
            circle.setText(value);

        }

    });

    let container2 = document.getElementById("circle2");

    let circle2 = new ProgressBar.Circle(container2, {

        color: '#ff9800',
        strokeWidth: 7,
        duration: 1600,
        from: { color: '#AAAAAA' },
        to: { color: '#ff9800' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * +484);
            circle.setText(value);
            
        }

    });

    let container3 = document.getElementById("circle3");

    let circle3 = new ProgressBar.Circle(container3, {

        color: '#ff9800',
        strokeWidth: 7,
        duration: 1400,
        from: { color: '#AAAAAA' },
        to: { color: '#ff9800' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * +777);
            circle.setText(value);
            
        }

    });

    let container4 = document.getElementById("circle4");

    let circle4 = new ProgressBar.Circle(container4, {

        color: '#ff9800',
        strokeWidth: 7,
        duration: 2500,
        from: { color: '#AAAAAA' },
        to: { color: '#ff9800' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * +8000);
            circle.setText(`+${value}`);
            
        }

    });

    let container5 = document.getElementById("circle5");

    let circle5 = new ProgressBar.Circle(container5, {

        color: '#ff9800',
        strokeWidth: 7,
        duration: 1200,
        from: { color: '#AAAAAA' },
        to: { color: '#ff9800' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * +162);
            circle.setText(value);
            
        }

    });

    let container6 = document.getElementById("circle6");

    let circle6 = new ProgressBar.Circle(container6, {

        color: '#ff9800',
        strokeWidth: 7,
        duration: 1000,
        from: { color: '#AAAAAA' },
        to: { color: '#ff9800' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * +84);
            circle.setText(value);
            
        }

    });

    let container7 = document.getElementById("circle7");

    let circle7 = new ProgressBar.Circle(container7, {

        color: '#ff9800',
        strokeWidth: 7,
        duration: 1400,
        from: { color: '#AAAAAA' },
        to: { color: '#ff9800' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * +623);
            circle.setText(value);
            
        }

    });

    let container8 = document.getElementById("circle8");

    let circle8 = new ProgressBar.Circle(container8, {

        color: '#ff9800',
        strokeWidth: 7,
        duration: 700,
        from: { color: '#AAAAAA' },
        to: { color: '#ff9800' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * +21);
            circle.setText(value);
            
        }

    });

    circle1.animate(1.0);
    circle2.animate(1.0);
    circle3.animate(1.0);
    circle4.animate(1.0);
    circle5.animate(1.0);
    circle6.animate(1.0);
    circle7.animate(1.0);
    circle8.animate(1.0);

});