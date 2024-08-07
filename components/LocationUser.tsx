import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { ICustomItem } from '../types/location.entity';
import { CalendarOutline, Cash, ChatOutline, Labels, More, Phone, PickUp, Received, Star, TruckOutline } from '../assets/icons';
import { EnvironmentOutline } from '../assets/icons/EnvironmentOutline';
import CustomButton from './CustomButton';


const ChildItem = ({ text, Icon }: ICustomItem) => {
    return (
        <View style={styles.parent}>
            {Icon}
            <Text style={styles.bodyText}>{text}</Text>
        </View>
    )
}

const LocationUser = () => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let locationSubscription = await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    distanceInterval: 10,
                },
                (loc) => {
                    setLocation(loc);
                }
            );

            return () => {
                if (locationSubscription) {
                    locationSubscription.remove();
                }
            };
        })();
    }, []);



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Pick-ups</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.cardItem}>
                            <View style={styles.profileContainer}>
                                <Image source={require("../assets/user.png")} style={styles.profileImage} />
                                <View style={styles.ratingContainer}>
                                    <Text style={styles.ratingText}>4.5</Text>
                                    <Star />
                                </View>
                            </View>
                            <View style={styles.cardHeaderText}>
                                <Text style={styles.cardTitle}>Driver</Text>
                                <Text style={styles.cardSubtitle}>John Doe</Text>
                            </View>
                            <View style={styles.iconButtons}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <ChatOutline />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Phone />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.collectingContainer}>
                            <TouchableOpacity style={styles.collectingButton}>
                                <Text style={styles.collectingText}>Collecting</Text>
                            </TouchableOpacity>
                            <View style={styles.etaContainer}>
                                <Text style={styles.etaLabel}>ETA</Text>
                                <Text style={styles.etaValue}>50 min</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardBody}>
                        <ChildItem Icon={<EnvironmentOutline />} text="Store West" />
                        <ChildItem Icon={<CalendarOutline />} text="1 - 3 pm, July 3" />
                        <ChildItem Icon={<TruckOutline />} text="10 Orders" />
                    </View>
                    <View style={styles.cardFooter}>
                        <CustomButton Icon={<PickUp />} text="Pick-up" />
                        <CustomButton Icon={<Cash />} text="Receive Cash" />
                        <CustomButton Icon={<Received />} text="Received Returns" />
                    </View>
                    <View style={styles.labelsContainer}>
                        <TouchableOpacity style={styles.labelsButton}>
                            <Labels />
                            <Text style={styles.labelsButtonText}>Labels</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.moreButton}>
                            <More />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.locationContainer}>
                    <View>
                        <Text style={styles.lastText}>Last Latitude:</Text>
                        <Text>{location?.coords.latitude}</Text>
                    </View>
                    <View>
                        <Text style={styles.lastText}>Last Longitude:</Text>
                        <Text>{location?.coords.longitude}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 104,
        backgroundColor: '#EBDD4C',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 16,
    },
    headerText: {
        color: '#38383E',
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        marginVertical: 20,
        marginHorizontal: 16,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        objectFit: 'cover'
    },
    cardHeaderText: {
        flex: 1,
        marginLeft: 10,
    },
    cardTitle: {
        fontWeight: '400',
        color: '#939496'
    },
    cardSubtitle: {
        color: '#38383E',
        fontWeight: '400',
    },
    iconButtons: {
        flexDirection: 'row',
        gap: 10
    },
    iconButton: {
        backgroundColor: '#EBDD4C',
        width: 32,
        height: 32,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileContainer: {
        position: 'relative'
    },
    ratingContainer: {
        backgroundColor: '#FFFFFF',
        gap: 1,
        borderRadius: 50,
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    ratingText: {
        fontSize: 8.1
    },
    collectingContainer: {
        flex: 1
    },
    collectingButton: {
        backgroundColor: '#E2F8FF',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
    },
    collectingText: {
        color: '#2CCCFF',
        paddingHorizontal: 9,
        paddingVertical: 5
    },
    etaContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 8
    },
    etaLabel: {
        color: '#939496'
    },
    etaValue: {
        color: '#38383E'
    },
    cardBody: {
        marginVertical: 10,
    },
    bodyText: {
        marginVertical: 2,
        fontSize: 14,
        fontWeight: '400',
        color: '#38383E',
        lineHeight: 16.8,
        marginTop: 5,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    labelsContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 20
    },
    labelsButton: {
        padding: 10,
        backgroundColor: '#EBDD4C',
        borderRadius: 5,
        alignItems: 'center',
        flex: 2,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    labelsButtonText: {
        color: '#fff',
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    },
    parent: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    lastText: {
        color: '#939496',
    },
    moreButton: {
        padding: 10,
        backgroundColor: '#FAFBFC',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E1E1E3',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
    },
    cardItem: {
        flexDirection: 'row',
        flex: 2,
        alignItems: 'center',
        backgroundColor: '#FAFBFC',
        padding: 5,
        borderRadius: 100
    }
});

export default LocationUser;
