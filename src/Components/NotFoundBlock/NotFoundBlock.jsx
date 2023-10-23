
import cl from './NotFoundBlock.module.scss'


const notFoundBlock = () => {
  return (
    <div className={cl.root}>
      <h1>Not found</h1>
    </div>
  );
};

export default notFoundBlock;