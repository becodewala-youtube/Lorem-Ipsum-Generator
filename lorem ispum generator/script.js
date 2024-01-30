
document.querySelector("#generate").addEventListener("click", function() {
    var paragraphs = document.querySelector("#paragraphs").value;
    var text = "";
    for (var i = 0; i < paragraphs; i++) {
      text += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.";
      if (i != paragraphs - 1) {
        text += "\n\n";
      }
    }
    document.querySelector("#textarea").value = text;
  });
  