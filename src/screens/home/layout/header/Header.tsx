import React, {useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Colors, IconName, Spacing24} from '@constants';
import {styles} from './Header.styles';
import {FontWeight, Icon, Space, Text24} from '@components';
import {HeaderProps} from './Header.types';

export const Header: React.FC<HeaderProps> = ({
  showCompleted,
  onShowCompletedChange,
}: HeaderProps) => {
  const showCompletedIcon = useMemo(() => {
    return showCompleted
      ? IconName.IconHomeHideCompleted
      : IconName.IconHomeShowCompleted;
  }, [showCompleted]);

  return (
    <View style={styles.container}>
      {/*<Icon icon={IconName.AppLogo} size={Spacing40} style={styles.logo} />*/}
      <Text24 weight={FontWeight.SemiBold} color={Colors.ChathamsBlueShade02}>
        task
      </Text24>
      <Text24 weight={FontWeight.SemiBold} color={Colors.MintGreenShade02}>
        beam
      </Text24>
      <Space flex />
      <TouchableOpacity onPress={() => onShowCompletedChange(!showCompleted)}>
        <Icon icon={showCompletedIcon} size={Spacing24} />
      </TouchableOpacity>
    </View>
  );
};
