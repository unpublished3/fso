const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => (
    parts.map(part => <Part part={part} key={part.id}/>)
);


const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

export default Course;
