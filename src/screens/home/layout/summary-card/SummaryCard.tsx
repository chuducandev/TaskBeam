import React from 'react';
import {View} from 'react-native';
import {SummaryCardProps} from './SummaryCard.types';
import {styles} from './SummaryCard.styles';
import {FontWeight, Icon, Text16, Text20, Text32} from '@components';
import {Colors, Spacing20} from '@constants';

export const SummaryCard = ({
  title,
  subtitle,
  value,
  icon,
  iconSize = Spacing20,
  style,
}: SummaryCardProps): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Icon icon={icon} size={iconSize} />
        <Text16 weight={FontWeight.SemiBold} style={styles.headerText}>
          {title}
        </Text16>
      </View>
      <View style={styles.content}>
        <Text32 weight={FontWeight.SemiBold}>{value}</Text32>
        <Text20
          weight={FontWeight.SemiBold}
          style={styles.contentText}
          color={Colors.ChathamsBlueTint03}>
          {subtitle}
        </Text20>
      </View>
    </View>
  );
};
