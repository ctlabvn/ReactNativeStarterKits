import createIconSet from 'react-native-vector-icons/lib/create-icon-set';

export const glyphMap = {
  'google-plus': 60043,
  facebook: 60048,
  twitter: 60054
};

const iconSet = createIconSet(glyphMap, 'icomoon', 'icomoon.ttf');

export default iconSet;
export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;
