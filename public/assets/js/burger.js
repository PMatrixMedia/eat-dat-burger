// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".submit").on("click", function(event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newBurger");

    var newBurgerState = {
      devoured: false
    };

    // Send the PUT request.
    $.ajax("/burgers/" + id, {
      type: "PUT",
        data: { devoured: true }
    }).then(
      function() {
        console.log("changed devoured to", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      Burger_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
      $.ajax("/burgers", {
          type: "POST",
          data: { name: newBurger }
    }).then(
      function() {
        console.log("created a new burger");
        // Reload the page to get the updated list
          (location.reload());
          $('#newBurger').val('');
      }
    );
  });
});
