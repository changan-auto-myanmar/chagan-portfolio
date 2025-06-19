const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full mx-4 transform transition-all duration-300 scale-100">
        {/* Header with Changan branding */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-t-lg p-6 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white font-changan">
            Message Sent Successfully!
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Thank You for Contacting Changan
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Your message has been received successfully. Our team will review
            your inquiry and get back to you.
          </p>

          {/* Features list */}
          {/* <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700 mb-2 font-medium">
              What happens next:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                Our team reviews your message
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                We'll contact you within 24 hours
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                Schedule your test drive or consultation
              </li>
            </ul>
          </div> */}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Continue Browsing
            </button>
            {/* <button
              onClick={() => {
                // You can customize this action
                onClose();
              }}
              className="flex-1 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              View Vehicles
            </button> */}
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
