$('#add-task-button').click(function() {
    let task = $('#add-task-input').val()

    if (task === '') {
        alert('Please PUT SOMETHING LOSER')
    } else {
        console.log(task)
        let $li = $('<li>' + task + '</li>')
        $('#things-to-do').append($li)
        $('#add-task-input').val('')
    }





})