import { FC, useEffect, useState } from 'react';
import { GoogleApiWrapper, IInfoWindowProps, IMapProps, Map, Marker } from 'google-maps-react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setRestaurant, setRestaurants } from '../../redux/modules/restaurants';

interface props extends IInfoWindowProps {
    query: string;
    placeId: null | string;
}

export const MapContainer: FC<props> = (props) => {
    const [map, setMap] = useState<null | IMapProps>(null);
    const { google, query, placeId } = props;
    const dispatch = useDispatch();
    const typedSelector: TypedUseSelectorHook<any> = useSelector;
    const restaurants = typedSelector(state => state.restaurants.restaurants);


    useEffect(() => {
        (query !== '' && map) && searchByQuery(query);
    }, [query]);

    useEffect(() => {
        if (placeId && map) {
            getDetails(placeId);
        }
    }, [placeId]);

    const getDetails = (id: string) => {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurant(null));
        const request = {
            placeId: id,
            fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number']
        };
        service.getDetails(request, (place: IteratorReturnResult<any>, status: any) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurant(place));
            }
        });
    };

    const searchByQuery = (query: string) => {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurant([]));
        const request = {
            location: map?.center,
            radius: '20000',
            type: ['restaurant'],
            query: query
        };
        service.textSearch(request, (results: IteratorReturnResult<any>, status: any) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurant(results));
            }
        });
    };

    const searchNeraby = (map: IMapProps, center: any) => {
        const service = new google.maps.places.PlacesService(map);
        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant']
        };
        service.nearbySearch(request, (results: IteratorReturnResult<any>, status: any) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results));
            }
        });
    };

    const onMapReady = (_: any, Rmap: IMapProps) => {
        Rmap.center !== undefined && setMap(Rmap);
        Rmap.center !== undefined && searchNeraby(Rmap, Rmap.center);
    };

    return (
        <Map centerAroundCurrentLocation
             onReady={onMapReady}
             onRecenter={onMapReady}
             {...props}
        >
            {
                restaurants.length >= 1 && restaurants.map((rest: any, index: number) => {
                        return (
                            <Marker key={index}
                                // @ts-ignore
                                    position={{ lat: rest.geometry.location.lat(), lng: rest.geometry.location.lng() }} />
                        );
                    }
                )
            }
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
    language: 'pt-BR'
})(MapContainer);
