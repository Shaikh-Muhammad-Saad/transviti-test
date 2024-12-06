const CustomButton = ({ children, className }) => {
    return (
        <button className={`flex-1 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 ${className}`}>
            {children}
        </button>
    );
}

export default CustomButton;