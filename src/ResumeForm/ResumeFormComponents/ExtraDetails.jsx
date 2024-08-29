import { useState, useEffect } from "react";

export default function ExtraDetails({
  formData,
  setFormData,
  setCurrentSection,
  handlePrevious,
}) {
  const [localData, setLocalData] = useState({
    qualities: [{ name: "" }],
    skills: [{ name: "" }],
  });

  useEffect(() => {
    if (
      formData.extraDetails &&
      Object.keys(formData.extraDetails).length >
        0
    ) {
      setLocalData(formData.extraDetails);
    } else {
      setLocalData({
        qualities: [{ name: "" }],
        skills: [{ name: "" }],
      });
    }
  }, [formData.extraDetails]);

  function handleChange(e, type, index) {
    const { value } = e.target;
    const updatedData = { ...localData };
    updatedData[type][index].name = value;
    setLocalData(updatedData);
  }

  function handleAdd(type) {
    const updatedData = { ...localData };
    updatedData[type].push({ name: "" });
    setLocalData(updatedData);
    console.log("this works");
  }

  function handleRemove(type, index) {
    const updatedData = { ...localData };
    if (updatedData[type].length > 1) {
      updatedData[type].splice(index, 1);
      setLocalData(updatedData);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const extraDetails = localData;

    setFormData((prevFormData) => ({
      ...prevFormData,
      extraDetails,
    }));
    setCurrentSection(
      (prevSection) => prevSection + 1
    );
  }

  function renderLists(type) {
    return localData[type].map((item, index) => {
      return (
        <div key={`${type}-${index}`}>
          <input
            type="text"
            id={`${type}-${index}`}
            name="qualities"
            value={item.name}
            onChange={(e) =>
              handleChange(e, type, index)
            }
            required
          />
          ;
          <button
            type="button"
            onClick={() =>
              handleRemove(type, index)
            }
          >
            Remove
          </button>
        </div>
      );
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Qualities</h2>
      <div>
        {renderLists("qualities")}
        <button
          type="button"
          onClick={() => handleAdd("qualities")}
        >
          Add Quality
        </button>
      </div>
      <h2>Skills</h2>
      <div>
        {renderLists("skills")}
        <button
          type="button"
          onClick={() => handleAdd("skills")}
        >
          Add Skill
        </button>
      </div>
      <button
        type="button"
        onClick={handlePrevious}
      >
        Back
      </button>
      <button type="submit">Next</button>
    </form>
  );
}
