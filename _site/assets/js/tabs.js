document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab-button");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", function() {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      // Add active class to the clicked tab
      this.classList.add("active");

      // Hide all panes
      panes.forEach(pane => pane.classList.remove("active"));
      // Show the corresponding pane
      const target = this.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });
});
