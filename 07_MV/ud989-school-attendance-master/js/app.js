/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */
(function() {
    if (!localStorage.attendance) {
        console.log('Creating attendance records...');
        function getRandom() {
            return (Math.random() >= 0.5);
        }

        var nameColumns = $('tbody .name-col'),
            attendance = {};

        nameColumns.each(function() {
            var name = this.innerText;
            attendance[name] = [];

            for (var i = 0; i <= 11; i++) {
                attendance[name].push(getRandom());
            }
        });

        localStorage.attendance = JSON.stringify(attendance);
    }
}());

/* STUDENT APPLICATION */
function old() {
    var attendance = JSON.parse(localStorage.attendance),
        $allMissed = $('tbody .missed-col'),
        $allCheckboxes = $('tbody input');

    // Count a student's missed days
    function countMissing() {
        $allMissed.each(function() {
            var studentRow = $(this).parent('tr'),
                dayChecks = $(studentRow).children('td').children('input'),
                numMissed = 0;

            dayChecks.each(function() {
                if (!$(this).prop('checked')) {
                    numMissed++;
                }
            });

            $(this).text(numMissed);
        });
    }

    // Check boxes, based on attendace records
    $.each(attendance, function(name, days) {
        var studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
            dayChecks = $(studentRow).children('.attend-col').children('input');
            
        dayChecks.each(function(i) {
            $(this).prop('checked', days[i]);
        });
    });

    // When a checkbox is clicked, update localStorage
    $allCheckboxes.on('click', function() {
        var studentRows = $('tbody .student'),
            newAttendance = {};

        studentRows.each(function() {
            var name = $(this).children('.name-col').text(),
                $allCheckboxes = $(this).children('td').children('input');

            newAttendance[name] = [];

            $allCheckboxes.each(function() {
                newAttendance[name].push($(this).prop('checked'));
            });
        });

        countMissing();
        localStorage.attendance = JSON.stringify(newAttendance);
    });

    countMissing();
}

$(function(){
    var MODEL = JSON.parse(localStorage.attendance);
    
    var octopus = {
        init: function(){
            this.checkAttendance(MODEL);
            this.bindEvents();
        },
        getStudentsNames(obj){
            return Object.keys(obj);
        },
        checkAttendance: function(obj){
            var names = this.getStudentsNames(obj);
            var rows = view.getAllStudentsRow();
            $.each(rows, function(index, element) {
               var $element = $(element);
               var $inputs = $element.find('input');
               octopus.dayCheck($inputs, MODEL[names[index]] );
               $('.missed-col')[index+1].innerText = octopus.countMissing( $element );
            });
        },
        dayCheck: function(inputs, values){
            $.each(inputs, function(index, input){
                $(input).prop('checked', values[index]);
            });
        },
        countMissing: function(row){
            return $(row).find('input:not(:checked)').length;
        },
        bindEvents: function(){
            $(view.getStudentRowInput() ).on('click', function(){
                var rows = view.getAllStudentsRow();
                $.each(rows, function(index, element) {
                    var $element = $(element);
                    $('.missed-col')[index+1].innerText = octopus.countMissing( $element );
                 });
                 octopus.saveAttendance(MODEL);
            })
        },
        saveAttendance: function(obj){
            var names = this.getStudentsNames(obj);
            var rows = view.getAllStudentsRow();
            var newAttendance = {};
            $.each(rows, function(index, element) {
               var $element = $(element);
               var $inputs = $element.find('input');
               newAttendance[names[index]] = [];
               $.each($inputs, function(i, input){
                    newAttendance[names[index]].push ( $(input).prop('checked') );
                });
            });
            localStorage.attendance = JSON.stringify(newAttendance);
        }
    };

    var view = {
        getAllStudentsRow: function(){
            return $('tr.student');
        },
        getStudentRowInput: function(){
            return $('tr.student .attend-col input');
        },
    }
    octopus.init();
}());