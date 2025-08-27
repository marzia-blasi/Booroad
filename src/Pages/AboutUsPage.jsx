export default function AboutUsPage() {
  const teams = [
    {
      id: 1,
      title: "Boo...Team",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae reprehenderit ipsum nihil, nam natus rerum voluptatum aperiam praesentium dicta rem labore, consequuntur expedita! Libero tempore voluptas debitis nesciunt, provident magni numquam blanditiis iste accusantium unde maiores accusamus eligendi quam nulla deleniti ullam laboriosam veniam doloremque et sequi. Perferendis, illo.",
      crew: [<li>Marzia</li>, <li>Asia</li>, <li>Tommaso</li>, <li>Simone</li>],
    },
    {
      id: 2,
      title: "Road..team",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae reprehenderit ipsum nihil, nam natus rerum voluptatum aperiam praesentium dicta rem labore, consequuntur expedita! Libero tempore voluptas debitis nesciunt, provident magni numquam blanditiis iste accusantium unde maiores accusamus eligendi quam nulla deleniti ullam laboriosam veniam doloremque et sequi. Perferendis, illo.",
      crew: [<li>Luca</li>, <li>Sara</li>, <li>Davide</li>, <li>Elena</li>],
    },
  ];

  return (
    <>
      <h1>Chi siamo</h1>
      <div className="container d-flex">
        {teams.map(({ id, title, text, crew }) => (
          <>
            <img src="https://picsum.photos/id/237/300/300" alt="" />
            <div className="row ms-4" key={id}>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>{crew}</ul>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
