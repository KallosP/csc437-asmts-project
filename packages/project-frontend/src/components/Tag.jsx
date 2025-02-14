import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Tag({ title, icon: Icon }) {
    return (
        <li className="bg-tag dark:bg-dark-tag rounded-full items-center px-4 py-1 flex gap-2">
            {Icon && <FontAwesomeIcon icon={Icon} className="text-svg dark:text-dark-svg" />}
            <p className="text-normal-text dark:text-dark-normal-text">{title}</p>
        </li>
    );
};
