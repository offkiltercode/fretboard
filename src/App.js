import React, { Component } from 'react';
import './App.css';
import MIDISounds from 'midi-sounds-react';

const Octave = 12;

const C = 0;
const Db = 1;
const D = 2;
const Eb = 3;
const E = 4
const F = 5;
const Gb = 6;
const G = 7;
const Ab = 8;
const A = 9;
const Bb = 10;
const B = 11;

var noteList = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// Set up the open string notes
const S1 = 5 * Octave + E;
const S2 = 4 * Octave + B;
const S3 = 4 * Octave + G;
const S4 = 4 * Octave + D;
const S5 = 3 * Octave + A;
const S6 = 3 * Octave + E;

const GuitarString = (props) => {
    return (
        <tr className="guitarString">
            {
                props.notes.map((note) => {
                    return (
                        <td>
                            <button onClick={() => props.action(note)}>{noteList[note % 12]}</button>
                        </td>
                    );
                })
            }
        </tr>
    )
}

class App extends Component {

    constructor(props) {
        super(props);
        this.midiSounds = new MIDISounds("root");
        this.midiSounds.cacheInstrument(260); //steel guitar
        this.state = {
            selectedInstrument: 260
        };
    }

    playNotes(notes) {
        this.midiSounds.playChordNow(this.state.selectedInstrument, notes, 0.5);
    }

    render() {
        
        var notesS1 = [];
        var notesS2 = [];
        var notesS3 = [];
        var notesS4 = [];
        var notesS5 = [];
        var notesS6 = [];

        var fretNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

        const FretRow = fretNumbers.map((value) => {
            return <td>{value === 0 ? " " : value}</td>
        });

        for (let i = 0; i < fretNumbers.length; i++) {
            notesS1.push(S1 + i);
            notesS2.push(S2 + i);
            notesS3.push(S3 + i);
            notesS4.push(S4 + i);
            notesS5.push(S5 + i);
            notesS6.push(S6 + i);
        }
        return (
            <div className="App">
                <table className="fretboard">
                    <tr class="fretNumbers">
                        {FretRow}
                    </tr>
                    <GuitarString notes={notesS1} action={(e) => this.playNotes([e])} />
                    <GuitarString notes={notesS2} action={(e) => this.playNotes([e])} />
                    <GuitarString notes={notesS3} action={(e) => this.playNotes([e])} />
                    <GuitarString notes={notesS4} action={(e) => this.playNotes([e])} />
                    <GuitarString notes={notesS5} action={(e) => this.playNotes([e])} />
                    <GuitarString notes={notesS6} action={(e) => this.playNotes([e])} />
                    <tr className="fretNumbers">
                        {FretRow}
                    </tr>
                </table>
                
                

            </div>
        );
    }
}

export default App;
