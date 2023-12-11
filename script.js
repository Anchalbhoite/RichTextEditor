function execCommand(command, value = null) {
    document.execCommand(command, false, value);
  }
   
  function updateEditorContent() {
    const textInputValue = document.getElementById('textInput').value;
    const fontSize = document.getElementById('fontSizeRange').value;
    const fontFamilySelector = document.getElementById('fontFamilySelector');
    const fontColorPicker = document.getElementById('fontColorPicker');
   
   
    const editor = document.getElementById('editor');
    editor.innerHTML = textInputValue;
    editor.style.fontSize = `${fontSize}px`;
    editor.style.fontFamily = fontFamily;
    editor.style.color = textColor;

    document.getElementById('fontSizeDisplay').textContent = fontSize;
  }

  function updateFontSize(value) {
    document.getElementById('fontSizeDisplay').textContent = value;
    updateEditorContent();
  }

   function changeFontFamily() {
        const selectedFontFamily = fontFamilySelector.value;
        editor.style.fontFamily = selectedFontFamily;
        saveState();
    }
     function changeFontColor() {
        const selectedFontColor = fontColorPicker.value;
        editor.style.color = selectedFontColor;
        saveState();
   }
    let undoStack = [];
    let redoStack = [];

    function saveState() {
        undoStack.push(editor.value);
        redoStack = []; // Clear redo stack when a new action is performed
    }

    function undo() {
        if (undoStack.length > 1) {
            redoStack.push(undoStack.pop());
            editor.value = undoStack[undoStack.length - 1];
        }
    }

    function redo() {
        if (redoStack.length > 0) {
            undoStack.push(redoStack.pop());
            editor.value = undoStack[undoStack.length - 1];
        }
    }