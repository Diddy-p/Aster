var l = document.querySelector("link[rel*='icon']") || document.createElement("link");
l.type = "image/x-icon";
l.rel = "shortcut icon";
var c = prompt("Select a tab cloak\n1. Canvas\n2. e-hallpass\n3. New Tab");
1 == c
  ? ((l.href = "https://harrisonburg.instructure.com/favicon.ico"), (document.title = "Dashboard"))
  : 2 == c
  ? ((l.href = "https://eduspiresolutions.org/wp-content/uploads/2020/09/cropped-favicon-270x270-1-150x150.png"), (document.title = "Digital Hall Pass | e-Hall Pass | Eduspire Solutions"))
  : 3 == c &&
    ((l.href =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/UlEQVR42q2S0Q3CMAxEGYERGIFP1FJ0JEXikw1gA9gANqAbwCaMwAgdoSNAHpVRE7UIISKd1Dq+s33O6O9H0ngudyzk67n8o0V5z+UvM60nH8kL+W0gNJAG0ORyh15yJrcj6RtQaKj1V/VQhfb3M2kyhIgckqtWoDxBJiHTakoc2Ozh/ogXIOoCkwqVZ0QK+Q2ExIsGQea3WBCp3wIWJKn9X1Y9s1d01o2lAuD2k0C8cymTpmYo4BtyvCl373pw6s6GBxDMRATTQsR7V2giuIwId7aBtKOvHhJC6VZylf2vkTXFnbi6jfurVS5CodGnY7Njkr0JZscnG+ev5wl1Bukqc4CB7gAAAABJRU5ErkJggg=="),
    (document.title = "New Tab"));