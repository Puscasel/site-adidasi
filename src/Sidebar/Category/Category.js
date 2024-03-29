import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="skateboarding"
          title="Skateboarding"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="football"
          title="Football"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="basketball"
          title="Basketball"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;