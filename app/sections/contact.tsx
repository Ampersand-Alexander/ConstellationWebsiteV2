import React from 'react';

// Define your icon image URLs
const iconUrls = [
  'github.png',
  'github.png',
  'github.png',
];

// Define the component
const Contact = () => {
  // Function to handle icon clicks and redirect
  const handleIconClick = (redirectUrl: string) => {
    window.location.href = redirectUrl; // Redirect to the specified URL
  };

  return (
    <section
            className="relative z-300 w-full items-center justify-center overflow-hidden pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-30 lg:pb-56"
            id="contact"
    >
        <div style={{ textAlign: 'center' }}>
            <h1>Title</h1>
            <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {iconUrls.map((url, index) => (
                <img
                key={index}
                src={url}
                alt={`Icon ${index + 1}`}
                style={{ cursor: 'pointer', margin: '0 10px' }}
                onClick={() => handleIconClick(`https://github.com/Ampersand-Alexander`)} // Replace with actual redirect URLs
                />
            ))}
            </div>
        </div>
    </section>

  );
};

export default Contact;
