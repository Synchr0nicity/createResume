import { useEffect } from "react";

export default function ExtraDetails({
  formData,
  setFormData,
  setCurrentSection,
  handlePrevious,
}) {
  useEffect(() => {
    if (!formData.extraDetails) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        extraDetails: {
          qualities: [{ name: "" }],
          skills: [{ name: "" }],
        },
      }));
    }
  }, []);

  function handleChange(e, type, index) {
    const { value } = e.target;

    setFormData((prevData) => {
      const updatedExtraDetails = {
        ...prevData.extraDetails,
      };

      const updatedTypeArray = [
        ...updatedExtraDetails[type],
      ];

      const updatedItem = {
        ...updatedTypeArray[index],
        name: value,
      };

      updatedTypeArray[index] = updatedItem;
      updatedExtraDetails[type] =
        updatedTypeArray;
      return {
        ...prevData,
        extraDetails: updatedExtraDetails,
      };
    });
  }

  function handleAdd(type) {
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        extraDetails: {
          ...prevData.extraDetails,
          [type]: [
            ...prevData.extraDetails[type],
            { name: "" },
          ],
        },
      };
      return updatedData;
    });
  }

  function handleRemove(type, index) {
    setFormData((prevData) => {
      const updatedExtraDetails = {
        ...prevData.extraDetails,
      };
      const updatedTypeArray = [
        ...updatedExtraDetails[type],
      ];

      if (updatedTypeArray.length > 1) {
        updatedTypeArray.splice(index, 1);
      }

      updatedExtraDetails[type] =
        updatedTypeArray;

      return {
        ...prevData,
        extraDetails: updatedExtraDetails,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentSection(
      (prevSection) => prevSection + 1
    );
  }

  function renderLists(type) {
    return formData.extraDetails[type].map(
      (item, index) => {
        return (
          <div key={`${type}-${index}`}>
            <input
              type="text"
              id={`${type}-${index}`}
              name={type}
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
      }
    );
  }

  if (!formData.extraDetails) {
    return null;
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
