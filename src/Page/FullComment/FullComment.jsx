import React from 'react';
import { useParams } from 'react-router-dom';
import PostData from '../../api/PostData';
import { useFitching } from '../../Component/hooks/useFitching';
import Loader from '../../Component/Ui/Loader/Loader';

function FullComment() {
  const { id } = useParams();

  const [comment, setComment] = React.useState();

  const [loading, erorrMessage, getData] = useFitching(async () => {
    const { data } = await PostData.getByID(id);
    setComment(data);
  });

  React.useEffect(() => {
    getData(id);
  }, []);

  if (!comment) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <span>{comment.id}</span>
        <div>
          <h3>{comment.email}</h3>
        </div>
      </div>
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
    </div>
  );
}

export default FullComment;
