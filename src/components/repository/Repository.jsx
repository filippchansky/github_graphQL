import "./repository.css"

const Repository = ({post}) => {
  return (
    <div className="post__item">
      <div className="post__header">
        <p>
          Название: <strong>{post.name}</strong>
        </p>
        <p>
          Звезды <strong>{post.stargazerCount}</strong>
        </p>
        <p>
          Последний commit: <strong>{post.updatedAt}</strong>
        </p>
      </div>
      <div className="post__body">
        <p>
          Владелец:{" "}
          <strong>
            <a  href={post.owner.url}>{post.owner.login}</a>
          </strong>
        </p>
        <img className="github-avatar" src={post.owner.avatarUrl} alt="" />
      </div>
      <div className="post__footer">
        <p>
          Описание: <strong>{post.description}</strong>
        </p>
      </div>
    </div>
  );
};

export default Repository;
