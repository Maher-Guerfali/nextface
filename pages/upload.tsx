import { useState, ChangeEvent, FormEvent } from "react";

type PredictionResponse = {
  prediction: number[]; // Adjust the type based on your TensorFlow model's output
};

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<number[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle file selection
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please upload a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);

      // Replace with your actual Colab ngrok API URL
      const response = await fetch("https://<your-ngrok-url>/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction");
      }

      const result: PredictionResponse = await response.json();
      setPrediction(result.prediction); // Set the prediction state with the result

    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Upload a File for TensorFlow Prediction</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Upload and Predict"}
        </button>
      </form>
      {prediction && (
        <div>
          <h2>Prediction Result:</h2>
          <p>{JSON.stringify(prediction)}</p> {/* Display prediction result */}
        </div>
      )}
    </div>
  );
}
