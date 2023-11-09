$(document).ready(function () {
  const loadingText = $("#loadingText");
  loadingText.hide();
  loadingText.text("Fetching Posts");

  alert("Hi i joy implemented this feature")

  const form = $("#postForm");

  form.submit(async function (e) {
    e.preventDefault();
    const titleValue = $("#titleField").val();
    const bodyValue = $("#bodyField").val();
    const responseView = $("#responseView");

    loadingText.show();

    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: titleValue,
          body: bodyValue,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      loadingText.hide(1000);

      const finalResult = await result.json();

      responseView.html(
        `<p>id: ${finalResult.id}</p>
          <p>title: ${finalResult.title}</p>
          <p>body: ${finalResult.body}</p>
          <p>userId: ${finalResult.userId}</p>`
      );
    } catch (error) {
      console.log(error);
      loadingText.hide(1000);
    }
  });
});
