const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        total={course.parts.reduce(
          (total, current) => total + current.exercises,
          0
        )}
      />
    </div>
  );
};

const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) =>
  parts.map((part) => <Part part={part} key={part.id} />);

const Total = ({ total }) => <p>Number of exercises {total}</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

export default Course;
