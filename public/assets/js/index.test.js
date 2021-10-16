const rewire = require("rewire")
const index = rewire("./index")
const getNotes = index.__get__("getNotes")
const saveNote = index.__get__("saveNote")
const deleteNote = index.__get__("deleteNote")
const renderActiveNote = index.__get__("renderActiveNote")
const handleNoteSave = index.__get__("handleNoteSave")
const handleNoteDelete = index.__get__("handleNoteDelete")
const handleNoteView = index.__get__("handleNoteView")
const handleNewNoteView = index.__get__("handleNewNoteView")
const handleRenderSaveBtn = index.__get__("handleRenderSaveBtn")
const renderNoteList = index.__get__("renderNoteList")
const getAndRenderNotes = index.__get__("getAndRenderNotes")
// @ponicode
describe("getNotes", () => {
    test("0", () => {
        let callFunction = () => {
            getNotes()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("saveNote", () => {
    test("0", () => {
        let callFunction = () => {
            saveNote("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            saveNote("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            saveNote(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            saveNote(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            saveNote("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            saveNote(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deleteNote", () => {
    test("0", () => {
        let callFunction = () => {
            deleteNote(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            deleteNote(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            deleteNote(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            deleteNote(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            deleteNote("7289708e-b17a-477c-8a77-9ab575c4b4d8")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            deleteNote(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderActiveNote", () => {
    test("0", () => {
        let callFunction = () => {
            renderActiveNote()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleNoteSave", () => {
    test("0", () => {
        let callFunction = () => {
            handleNoteSave()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleNoteDelete", () => {
    test("0", () => {
        let callFunction = () => {
            handleNoteDelete({ stopPropagation: () => "2021-07-30T00:05:36.818Z" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            handleNoteDelete({ stopPropagation: () => "2021-07-29T23:03:48.812Z" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            handleNoteDelete({ stopPropagation: () => "2021-07-29T20:12:53.196Z" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            handleNoteDelete({ stopPropagation: () => "2021-07-29T17:54:41.653Z" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            handleNoteDelete({ stopPropagation: () => "2021-07-29T15:31:46.922Z" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            handleNoteDelete(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleNoteView", () => {
    test("0", () => {
        let callFunction = () => {
            handleNoteView()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleNewNoteView", () => {
    test("0", () => {
        let callFunction = () => {
            handleNewNoteView()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleRenderSaveBtn", () => {
    test("0", () => {
        let callFunction = () => {
            handleRenderSaveBtn()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderNoteList", () => {
    test("0", () => {
        let callFunction = () => {
            renderNoteList(["4.0.0-beta1\t", "v4.0.0-rc.4", "v4.0.0-rc.4"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            renderNoteList(["v1.2.4", "^5.0.0", "v1.2.4"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            renderNoteList(["1.0.0", "v1.2.4", "4.0.0-beta1\t"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            renderNoteList(["v4.0.0-rc.4", "v1.2.4", "v4.0.0-rc.4"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            renderNoteList(["4.0.0-beta1\t", "4.0.0-beta1\t", "4.0.0-beta1\t"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            renderNoteList(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getAndRenderNotes", () => {
    test("0", () => {
        let callFunction = () => {
            getAndRenderNotes()
        }
    
        expect(callFunction).not.toThrow()
    })
})
