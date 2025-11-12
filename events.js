document.addEventListener("DOMContentLoaded", () => {
  const events = [
    // --- Window Events ---
    { name: "load", category: "Window", description: "Fires when the page has fully loaded.", tags: "body, img, script", link: "https://www.w3schools.com/jsref/event_onload.asp" },
    { name: "resize", category: "Window", description: "Occurs when the browser window is resized.", tags: "window", link: "https://www.w3schools.com/jsref/event_onresize.asp" },
    { name: "scroll", category: "Window", description: "Triggered when the document view is scrolled.", tags: "window, div", link: "https://www.w3schools.com/jsref/event_onscroll.asp" },
    { name: "unload", category: "Window", description: "Fired when a page is unloaded", tags: "body, frameset", link: "https://www.w3schools.com/jsref/event_onunload.asp" },
   
    // --- Mouse Events ---
    { name: "click", category: "Mouse", description: "Occurs when the user clicks on an element.", tags: "button, a, div", link: "https://www.w3schools.com/jsref/event_onclick.asp" },
    { name: "dblclick", category: "Mouse", description: "Occurs when the user double-clicks on an element.", tags: "button, img", link: "https://www.w3schools.com/jsref/event_ondblclick.asp" },
    { name: "mousedown", category: "Mouse", description: "Fired when a mouse button is pressed down.", tags: "any element", link: "https://www.w3schools.com/jsref/event_onmousedown.asp" },
    { name: "mouseup", category: "Mouse", description: "Fired when a mouse button is released.", tags: "any element", link: "https://www.w3schools.com/jsref/event_onmouseup.asp" },
    { name: "mousemove", category: "Mouse", description: "Triggered when the pointer moves within an element.", tags: "any element", link: "https://www.w3schools.com/jsref/event_onmousemove.asp" },
    { name: "mouseover", category: "Mouse", description: "Triggered when the mouse pointer enters an element", tags: "all", link: "https://www.w3schools.com/jsref/event_onmouseover.asp" },
    { name: "mouseout", category: "Mouse", description: "Triggered when the mouse pointer leaves an element", tags: "all", link: "https://www.w3schools.com/jsref/event_onmouseout.asp" },
    { name: "contextmenu", category: "Mouse", description: "Triggered when the right mouse button is clicked", tags: "all", link: "https://www.w3schools.com/jsref/event_oncontextmenu.asp" },
   
    // --- Keyboard Events ---
    { name: "keydown", category: "Keyboard", description: "Occurs when a key is pressed down.", tags: "input, textarea, document", link: "https://www.w3schools.com/jsref/event_onkeydown.asp" },
    { name: "keyup", category: "Keyboard", description: "Occurs when a key is released.", tags: "input, textarea, document", link: "https://www.w3schools.com/jsref/event_onkeyup.asp" },
    { name: "keypress", category: "Keyboard", description: "Occurs when a key is pressed.", tags: "input, textarea, document", link: "https://www.w3schools.com/jsref/event_onkeypress.asp" },

    // --- Form Events ---
    { name: "submit", category: "Form", description: "Occurs when a form is submitted.", tags: "form", link: "https://www.w3schools.com/jsref/event_onsubmit.asp" },
    { name: "change", category: "Form", description: "Occurs when an element loses focus after its value changes.", tags: "input, select, textarea", link: "https://www.w3schools.com/jsref/event_onchange.asp" },
    { name: "focus", category: "Focus", description: "Occurs when an element gets focus.", tags: "input, button, a", link: "https://www.w3schools.com/jsref/event_onfocus.asp" },
    { name: "blur", category: "Focus", description: "Occurs when an element loses focus.", tags: "input, textarea", link: "https://www.w3schools.com/jsref/event_onblur.asp" },
    { name: "input", category: "Form", description: "Occurs when the value of an element changes", tags: "input, textarea", link: "https://www.w3schools.com/jsref/event_oninput.asp" },
    { name: "reset", category: "Form", description: "Fired when a form is reset", tags: "form", link: "https://www.w3schools.com/jsref/event_onreset.asp" },

    // --- Clipboard Events ---
    { name: "copy", category: "Clipboard", description: "Fires when content is copied.", tags: "input, textarea", link: "https://www.w3schools.com/jsref/event_oncopy.asp" },
    { name: "paste", category: "Clipboard", description: "Fires when content is pasted.", tags: "input, textarea", link: "https://www.w3schools.com/jsref/event_onpaste.asp" },
    { name: "cut", category: "Clipboard", description: "Occurs when the user cuts content", tags: "input, textarea, document", link: "https://www.w3schools.com/jsref/event_oncut.asp" },
    
    // --- Drag & Drop Events ---
    { name: "dragstart", category: "Drag & Drop", description: "Occurs when the user starts dragging an element.", tags: "div, img, a", link: "https://www.w3schools.com/jsref/event_ondragstart.asp" },
    { name: "drop", category: "Drag & Drop", description: "Occurs when the dragged element is dropped.", tags: "div, section", link: "https://www.w3schools.com/jsref/event_ondrop.asp" },

    // --- Touch & Pointer Events ---
    { name: "touchstart", category: "Touch", description: "Triggered when a finger touches the screen.", tags: "div, button", link: "https://www.w3schools.com/jsref/event_ontouchstart.asp" },
    { name: "pointermove", category: "Pointer", description: "Fired when a pointer changes coordinates.", tags: "any element", link: "https://www.w3schools.com/jsref/event_onpointermove.asp" },

    // --- Media Events ---
    { name: "play", category: "Media", description: "Occurs when media playback starts.", tags: "audio, video", link: "https://www.w3schools.com/jsref/event_onplay.asp" },
    { name: "pause", category: "Media", description: "Occurs when media playback is paused.", tags: "audio, video", link: "https://www.w3schools.com/jsref/event_onpause.asp" },
    { name: "ended", category: "Media", description: "Occurs when media playback ends", tags: "audio, video", link: "https://www.w3schools.com/jsref/event_onended.asp" },
    { name: "volumechange", category: "Media", description: "Occurs when the volume is changed", tags: "audio, video", link: "https://www.w3schools.com/jsref/event_onvolumechange.asp" },

    // --- Animation/Transition ---
    { name: "animationstart", category: "Animation/Transition", description: "Fired when a CSS animation starts.", tags: "any element", link: "https://www.w3schools.com/jsref/event_animationstart.asp" },
    { name: "transitionend", category: "Animation/Transition", description: "Occurs when a CSS transition has completed.", tags: "any element", link: "https://www.w3schools.com/jsref/event_transitionend.asp" },
    
    // --- DOM Events ---
    { name: "DOMContentLoaded", category: "DOM", description: "Occurs when the HTML document has been fully loaded.", tags: "document", link: "https://www.w3schools.com/jsref/event_dom_content_loaded.asp" },
    { name: "input", category: "Form", description: "Occurs when an element gets user input.", tags: "input, textarea", link: "https://www.w3schools.com/jsref/event_oninput.asp" },
 
    // --- Focus Events ---
    { name: "focusin", category: "Focus", description: "Occurs when an element is about to get focus", tags: "input, select, textarea", link: "https://www.w3schools.com/jsref/event_onfocusin.asp" },
    { name: "focusout", category: "Focus", description: "Occurs when an element is about to lose focus", tags: "input, select, textarea", link: "https://www.w3schools.com/jsref/event_onfocusout.asp" }
  ];

  const tableBody = document.getElementById("eventsTableBody");
  const searchBox = document.getElementById("searchBox");
  const categoryFilter = document.getElementById("categoryFilter");

  function renderTable(data) {
    tableBody.innerHTML = "";
    if (data.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5">No events found.</td></tr>`;
      return;
    }

    data.forEach(evt => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><code>${evt.name}</code></td>
        <td>${evt.category}</td>
        <td>${evt.description}</td>
        <td>${evt.tags}</td>
        <td><a href="${evt.link}" target="_blank">W3Schools</a></td>
      `;
      tableBody.appendChild(row);
    });
  }

  function filterEvents() {
    const query = searchBox.value.toLowerCase();
    const category = categoryFilter.value;
    const filtered = events.filter(evt => {
      const matchesCategory = category === "all" || evt.category === category;
      const matchesQuery =
        evt.name.toLowerCase().includes(query) ||
        evt.description.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
    renderTable(filtered);
  }

  searchBox.addEventListener("input", filterEvents);
  categoryFilter.addEventListener("change", filterEvents);

  // Initial render
  renderTable(events);
});
