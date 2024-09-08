import { useEffect } from "react";

export default function ExtraDetails({
  formData,
  setFormData,
  handlePrevious,
  handleSubmit,
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

  function renderLists(type) {
    return formData.extraDetails[type].map(
      (item, index) => {
        return (
          <div
            key={`${type}-${index}`}
            className="btnRemoveContainer"
          >
            <img
              type="button"
              onClick={() =>
                handleRemove(type, index)
              }
              src="/icons8-remove-32 (1).png"
              alt="remove icon"
            />
            <input
              type="text"
              id={`${type}-${index}`}
              name={type}
              value={item.name}
              onChange={(e) =>
                handleChange(e, type, index)
              }
              placeholder={`${type}`}
              required
            />
          </div>
        );
      }
    );
  }

  if (!formData.extraDetails) {
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="extraDetailsForm"
    >
      <div id="extraDetailsContainer">
        <div id="qualities">
          <div className="addDetailsContainer">
            <h2>Qualities</h2>
            <img
              type="button"
              onClick={() =>
                handleAdd("qualities")
              }
              src="/icons8-add-32 (1).png"
              alt="add button"
            />
          </div>
          {renderLists("qualities")}
        </div>
        <div id="skills">
          <div className="addDetailsContainer">
            <h2>Skills</h2>
            <img
              type="button"
              onClick={() => handleAdd("skills")}
              src="/icons8-add-32 (1).png"
              alt="add button"
            />
          </div>
          {renderLists("skills")}
        </div>
      </div>
      <div className="btnContainer">
        <button
          type="button"
          onClick={handlePrevious}
        >
          Back
        </button>
        <button type="submit">Finalize</button>
      </div>
    </form>
  );
}
