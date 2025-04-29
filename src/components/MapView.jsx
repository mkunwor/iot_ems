import React from "react";

const MapView = () => {
  return (
    <div className="bg-white shadow rounded-lg p-0 overflow-hidden relative">
      {/* Overlay Stats */}
      <div className="absolute z-10 top-2 left-2 flex space-x-2">
        {[
          { label: "Projects(PCS)", value: "12" },
          { label: "Meters(PCS)", value: "219" },
          { label: "Total number of alarms", value: "621" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-90 px-3 py-1 rounded shadow text-xs text-gray-700 font-medium border border-gray-200"
          >
            <div className="text-gray-500">{item.label}</div>
            <div className="text-teal-700 text-lg font-semibold">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Embedded Google Map */}
      <iframe
        title="MapView"
        width="100%"
        height="300"
        loading="lazy"
        style={{ border: 0 }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?q=Menara+Astra,+Jakarta,+Indonesia&key=AIzaSyBYqvljAEBO2Lrzi9vSLoTcc3Kn4qgQ7Q8"
      ></iframe>
    </div>
  );
};

export default MapView;
