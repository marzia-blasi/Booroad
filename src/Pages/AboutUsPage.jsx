export default function AboutUsPage() {
  const teams = [
    {
      id: 1,
      title: "Boo...Team",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quae reprehenderit ipsum nihil, nam natus rerum voluptatum aperiam praesentium dicta rem labore, consequuntur expedita! Libero tempore voluptas debitis nesciunt, provident magni numquam blanditiis iste accusantium unde maiores accusamus eligendi quam nulla deleniti ullam laboriosam veniam doloremque et sequi. Perferendis, illo.",
      teamone: [
        <li>Marzia</li>,
        <li>Asia</li>,
        <li>Tommaso</li>,
        <li>Simone</li>,
      ],
    },
  ];

  return (
    <>
      <h1>Chi siamo</h1>
      <div className="container d-flex">
        <img src="https://picsum.photos/id/237/300/300" alt="" />
        {teams.map(({ id, title, text, teamone }) => (
          <div className="row ms-4" key={id}>
            <h3>{title}</h3>
            <p>{text}</p>
            <ul>{teamone}</ul>
          </div>
        ))}
      </div>
    </>
  );
}
