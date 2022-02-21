import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  View,
} from 'react-native';
import Avatar from '../../components/Avatar';
import Text from '../../components/Text';
import i18n, { Languages } from '../../i18n';
import colors from '../../theme/colors';
import styles, { AVATAR_SIZE } from './styles';

const appointmentList = [
  { name: 'Dr. Afreen', date: new Date() },
  { name: 'Dr. Shambhav', date: new Date() },
];
const userInfo = {
  name: 'Nobody',
  location: 'Kuala Lumpur Malaysia',
  image:
    'https://firebasestorage.googleapis.com/v0/b/hakeemi.appspot.com/o/person.png?alt=media&token=f5613d3f-58a2-4755-8152-1fc484537705',
};

const Profile: FC = () => {
  const { t } = useTranslation('profile');
  const [loading, setLoading] = useState(true);
  const changeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ScrollView contentContainerStyle={styles.mainContainer} bounces={false}>
      <View style={styles.container}>
        <Avatar shape="circular" size={AVATAR_SIZE} onPress={() => {}}>
          <Image
            source={{
              uri: userInfo.image,
              width: AVATAR_SIZE,
              height: AVATAR_SIZE,
            }}
            onLoad={() => setLoading(false)}
          />
          {loading && (
            <ActivityIndicator
              style={StyleSheet.absoluteFill}
              color="white"
              size="large"
            />
          )}
        </Avatar>
        <Text size="head-30" color="black">
          {userInfo.name}
        </Text>
        <Text size="body-20" color="dark">
          {userInfo.location}
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.language}>
        <Text size="head-24" color="black" level="600">
          {t('language')}
        </Text>
        <View style={styles.languageForm}>
          <Switch
            trackColor={{
              true: colors.primary,
              false: colors.secondary,
            }}
            ios_backgroundColor={colors.secondary}
            onValueChange={val =>
              val ? changeLanguage('tr') : changeLanguage('en')
            }
            value={i18n.language === 'tr'}
          />
          <Text color="black" size="body-16" level="600">
            {i18n.language === 'tr'
              ? 'Chinese -> English'
              : 'English -> Chinese'}
          </Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.appointments}>
        <Text size="head-24" color="black" level="600">
          {t('upcomingAppointments')}
        </Text>
        <Text size="body-14" color="dark">
          {t('appointment', { count: appointmentList.length })}
        </Text>
        <View style={styles.sessionContainer}>
          {appointmentList.map(({ name, date }) => (
            <View style={styles.session}>
              <Text size="body-20" color="primary" level="600">
                {name}
              </Text>
              <View style={styles.date}>
                <Text size="body-14" color="primary">
                  {t('time', { date })}
                </Text>
                <Text size="body-10" color="primary">
                  {t('day', { date })}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
