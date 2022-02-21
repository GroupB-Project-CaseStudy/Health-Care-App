import React from 'react';
import { View } from 'react-native';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import styles from './styles';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  availableDates: Array<Date>;
  onPress: (date: Date) => void;
}
const Appointments = ({ title, availableDates, onPress }: Props) => {
  const { t } = useTranslation('doctorProfile');
  return (
    <View style={styles.container}>
      <Text color="black" size="head-24" style={styles.title}>
        {title}
      </Text>
      <View style={styles.listContainer}>
        {availableDates.map((date, index) => (
          <Button
            style={styles.button}
            key={index}
            onPress={() => onPress(date)}
            theme="tertiary">
            {t('dateFormat', { date })}
          </Button>
        ))}
      </View>
    </View>
  );
};

export default Appointments;
