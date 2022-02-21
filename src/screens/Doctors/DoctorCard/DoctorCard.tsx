import { useNavigation } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Text from '../../../components/Text';
import { Doctor } from '../../../services/api/types';
import styles from '../styles';

interface Props {
  doctor: Doctor;
}
const Card: FC<Props> = ({ doctor }) => {
  const { t } = useTranslation('doctors');
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.card}
      onPress={() => navigate('DoctorProfileModal', { id: doctor.id })}>
      <View style={styles.avatar}>
        <Image
          resizeMode="contain"
          source={{ uri: doctor.avatar, height: 134, width: 134 }}
          onLoad={() => setLoading(false)}
          fadeDuration={0}
        />
        {loading && (
          <ActivityIndicator
            style={StyleSheet.absoluteFill}
            size="large"
            color="white"
          />
        )}
      </View>
      <View style={styles.cardContent}>
        <Text color="black" size="head-20" numberOfLines={1}>
          {t('doctorName', { name: doctor.name })}
        </Text>
        <Text color="secondary" size="body-14" numberOfLines={1}>
          {doctor.title}
        </Text>
        <Text color="black" size="body-12" numberOfLines={1}>
          {doctor.email}
        </Text>
        <Text style={styles.bio} color="dark" size="body-12" numberOfLines={3}>
          {doctor.bio}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
