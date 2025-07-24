import './RepoCard.css';
const RepoCard = ({ repo }) => {
  return (
    <div className="col-12 app-shadow p-3">
      <div className="d-flex">
        <img src={repo.owner.avatar_url} alt={repo.owner.login} className="userImage" />
        <div className="ms-3 text-muted">
          <div className="fs-4">{repo.name}</div>
          <div className="fs-6 truncate-2 mt-2">{repo.description}</div>
          <div className="mt-2">⭐ {repo.stargazers_count} | 👤 {repo.owner.login}</div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
