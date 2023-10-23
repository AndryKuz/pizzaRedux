

const Categories = ({category, onClickCategory}) => {
  
  
  const categoryName = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
 

  return (
    <div className="content__categories">
      <ul>
        {categoryName.map((item, index) => (
          <li
            key={item}
            onClick={() => onClickCategory(index)}
            className={category === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
