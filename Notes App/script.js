const addBtn = document.querySelector(".take_note");

addBtn.addEventListener("click", addNote);

function addNote(text) {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
            <div class="note_control">
              <button title="Save and edit notes" class="edit">
              <i class="fa-solid fa-floppy-disk"></i>
              </button>
              <button class="delete" title="Delete notes">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
            <div class="note_info">
              <textarea title="Write your notes here...">${
                text instanceof MouseEvent ? "" : text
              }</textarea>
            </div>
          `;

  const saveBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");

  deleteBtn.addEventListener("click", function () {
    note.remove();
    saveNotes();
  });

  saveBtn.addEventListener("click", function () {
    saveNotes();
  });

  document.querySelector(".notes_container").appendChild(note);
  saveNotes();
}

function saveNotes() {
  const allNotes = document.querySelectorAll(".note textarea");
  const data = [];
  allNotes.forEach((note) => data.push(note.value));
  localStorage.setItem("notes", JSON.stringify(data));
}

// IIFE Function!
(function () {
  const LSNotes = JSON.parse(localStorage.getItem("notes"));
  LSNotes.forEach((note) => addNote(note));
})();
