import React from 'react'
import PropTypes from 'prop-types';

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icons,
    classes = "",
    onClick,
}) => {
    if (href) {
        return (
            <a 
                href={href} 
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className={"btn btn-primary " + classes}
                onClick={onClick}
            >
                {label}
                {icons ? 
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icons}
                    </span> 
                    : null
                }
            </a>
        )
    } else {
        return (
            <button 
                className={"btn btn-primary " + classes}
                onClick={onClick}
            >
                {label}
                {icons ? 
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icons}
                    </span> 
                    : null
                }
            </button>
        )
    }
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icons: PropTypes.string,
    classes: PropTypes.string,
    onClick: PropTypes.func,
}

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icons,
    classes = "",
    onClick,
}) => {
    if (href) {
        return (
            <a 
                href={href} 
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className={"btn btn-outline " + classes}
                onClick={onClick}
            >
                {label}
                {icons ? 
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icons}
                    </span> 
                    : null
                }
            </a>
        )
    } else {
        return (
            <button 
                className={"btn btn-outline " + classes}
                onClick={onClick}
            >
                {label}
                {icons ? 
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icons}
                    </span> 
                    : null
                }
            </button>
        )
    }
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icons: PropTypes.string,
    classes: PropTypes.string,
    onClick: PropTypes.func,
}

export {
    ButtonPrimary,
    ButtonOutline
}