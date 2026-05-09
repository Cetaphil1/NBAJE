import React, { useState } from "react";

export default function ProfileInputPage() {
  const [data, setData] = useState({
    name: "",
    position: "",
    school: "",
    height: "",
    weight: "",
    forty: "",
    bio: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const placeholders = {
    name: "Name",
    position: "Select position",
    school: "School name",
    height: "e.g., 5'11\"",
    weight: "e.g., 170 lbs",
    forty: "e.g., 4.58s",
    bio: "Brief personal scouting summary",
    image: "Optional image URL",
  };

  const validate = () => {
    const newErrors = {};
    const urlRegex = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/\S*)?$/;
    if (!data.name.trim()) newErrors.name = "Name is required.";
    if (!data.position) newErrors.position = "Position is required.";
    if (!data.school.trim()) newErrors.school = "School is required.";
    if (!/^\d+'\d{1,2}"$/.test(data.height.trim()))
      newErrors.height = "Height must be in format like 5'11\".";
    if (!/^\d+\s?(lbs|LB|lb|pounds)?$/.test(data.weight.trim()))
      newErrors.weight = "Weight must be a number followed by 'lbs'.";
    if (!/^\d+(\.\d+)?s$/.test(data.forty.trim()))
      newErrors.forty = "40 time must be in seconds, like '4.58s'.";
    if (!data.bio.trim()) newErrors.bio = "Bio is required.";
    if (data.image && !urlRegex.test(data.image.trim()))
      newErrors.image = "Must be a valid URL (starting with http).";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Profile submitted successfully!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const positions = [
    "Cornerback",
    "Wide Receiver",
    "Quarterback",
    "Linebacker",
    "Running Back",
    "Tight End",
    "Defensive End",
    "Kicker",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f8",
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "#fff",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          D3 Football Profile Builder
        </h1>

        {/* Input Form */}
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {[
              "name",
              "position",
              "school",
              "image",
              "height",
              "weight",
              "forty",
            ].map((field, i) => (
              <div
                key={field}
                style={{ gridColumn: i === 1 ? "1 / span 1" : undefined }}
              >
                <label>{placeholders[field] || field}</label>
                {field === "position" ? (
                  <select
                    name="position"
                    value={data.position}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="" disabled>
                      {placeholders.position}
                    </option>
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    name={field}
                    value={data[field]}
                    onChange={handleChange}
                    placeholder={placeholders[field]}
                    style={inputStyle}
                  />
                )}
                {errors[field] && <p style={errorStyle}>{errors[field]}</p>}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label>Bio</label>
            <textarea
              name="bio"
              rows="4"
              value={data.bio}
              onChange={handleChange}
              placeholder={placeholders.bio}
              style={{ ...inputStyle, width: "100%" }}
            />
            {errors.bio && <p style={errorStyle}>{errors.bio}</p>}
          </div>

          <button
            type="submit"
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            Submit Profile
          </button>
        </form>

        {/* Profile Preview */}
        <div
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            backgroundColor: "#f9f9f9",
            borderRadius: "1rem",
            textAlign: "center",
          }}
        >
          {data.image && (
            <img
              src={data.image}
              alt="Profile"
              style={{
                width: "120px",
                borderRadius: "50%",
                marginBottom: "1rem",
              }}
            />
          )}
          <h2>{data.name || "Name"}</h2>
          <p>{data.position || "Position"}</p>
          <p>{data.school || "School"}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "1rem",
            }}
          >
            <p>
              <strong>Height:</strong> {data.height || "-"}
            </p>
            <p>
              <strong>Weight:</strong> {data.weight || "-"}
            </p>
            <p>
              <strong>40 Time:</strong> {data.forty || "-"}
            </p>
          </div>
          <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
            {data.bio || "Your personal scouting summary will appear here."}
          </p>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  borderRadius: "0.5rem",
  border: "1px solid #ccc",
  marginTop: "0.25rem",
};

const errorStyle = {
  color: "red",
  fontSize: "0.8rem",
  marginTop: "0.25rem",
};
