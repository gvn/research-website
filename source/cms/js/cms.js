JSONEditor.defaults.theme = 'bootstrap3';
JSONEditor.defaults.iconlib = 'bootstrap3';

// Initialize the editor with a JSON schema
var editor = new JSONEditor(document.getElementById('editor'),{
  // TODO : Make schema external
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "mofoResearch",
    "type": "object",
    "properties": {
      "headline": {
        "id": "mofoResearch/headline",
        "type": "string"
      },
      "subhead": {
        "id": "mofoResearch/subhead",
        "type": "string"
      },
      "subhead2": {
        "id": "mofoResearch/subhead2",
        "type": "string"
      },
      "blockPairs": {
        "id": "mofoResearch/blockPairs",
        "type": "array",
        "items": {
          "id": "mofoResearch/blockPairs/0",
          "type": "object",
          "properties": {
            "location": {
              "id": "mofoResearch/blockPairs/0/location",
              "type": "string"
            },
            "date": {
              "id": "mofoResearch/blockPairs/0/date",
              "type": "string"
            },
            "reportURL": {
              "id": "mofoResearch/blockPairs/0/reportURL",
              "type": "string"
            },
            "description": {
              "id": "mofoResearch/blockPairs/0/description",
              "type": "string"
            }
          }
        }
      }
    },
    "required": [
      "headline",
      "subhead",
      "subhead2",
      "blockPairs"
    ]
  }
});

editor.setValue(JSON.parse(localStorage.getItem('page')));

document.getElementById('submit').addEventListener('click',function() {
  var pageJSON = editor.getValue();

  console.log(pageJSON);

  localStorage.setItem('page', JSON.stringify(pageJSON));
});
