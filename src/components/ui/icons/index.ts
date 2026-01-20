import type { ComponentType, SVGProps } from 'react';
import Icon404 from '@/assets/icons/404.svg?react';
import IconSearch from '@/assets/icons/search.svg?react';
import IconArrow from '@/assets/icons/arrow.svg?react';
import IconLady from '@/assets/icons/lady.svg?react';

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;


const iconsMap: Record<string, SvgComponent> = {
    '404': Icon404,
	search: IconSearch,
	lady: IconLady,
    arrow: IconArrow,
};

export { Icon404, IconSearch, IconLady };
export default iconsMap;