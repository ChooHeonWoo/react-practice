function MovieDetail({ id, cover }) {
  return (
    <div>
      <img alt={id} src={cover}></img>
    </div>
  );
}

export default MovieDetail;
