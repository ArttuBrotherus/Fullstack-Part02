import logo from './logo.svg';
import './App.css';
import { Part, OneCourse, Course } from "./Course.js";

/*
let array = [1, 2, 3, 4, 5];

let sum = array.reduce(function(a, b){
  return a + b;
});

console.log(sum);
*/

/*
<p>This is some normal paragraph text, and this <span class="bolded">word</span> is bold for decoration.</p>

<ul>
        {notes.map(note => <li>{note.content}</li>)}
      </ul>
*/

const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: '2025 Edition',
        exercises: 15,
        id: 4
      }
    ]
  }

  return(
    <div>
      <h1>
        Web development curriculum
      </h1>
      <Course courses={courses} />
    </div>
  )

/*
  return(
    <>
      <h1>
        Half Stack application development
      </h1>
      <Course course={course} />
    </>
  )
*/

}

export default App;
