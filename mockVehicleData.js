
const mockFormattedDrivinResponse = {
    data: {
        getRecommendations: [
            {
                'vehicle': {
                    'vin': '3FAHP0HA1AR151111',
                    'vehicle_id': '403956904',
                    'year': 2013,
                    'make': 'Chevrolet',
                    'model': 'Fusion',
                    'trim': 'SE',
                    'vehicle_grade': null,
                    'mileage': null,
                    'driveTrain': 'FRONT WHEEL DRIVE',
                    'exterior_color': 'RED CANDY METALLIC TINTED CLEARCOAT',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=403956904_0_20180905063609132.jpg',
                    'binPrice': 8100,
                    'current_max_bid': 8000,
                    'cost_to_market': 0.8449684507684836,
                    'market_day_supply_mmy': 13.636363636363637,
                    'current_dealer_supply': null,
                    'seller': null,
                    'state': null,
                    'auction_vendor': 'ADSEA',
                    'avg_dealer_type_inv_cnt_mmy': 0.1,
                    'interiorColor': 'CHARCOAL BLACK',
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511405
                    }
                },
                'vehicle_id': '403956903',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '2',
                    'reason_description': 'A similar MMY has recently moved off your lot, it looks like you sell these well.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/recent_success.png',
                    'reason_name': 'Recent Success'
                }]
            },
            {
                'vehicle': {
                    'vin': '1G1PF5S90B7132992',
                    'vehicle_id': '403956908',
                    'year': 2013,
                    'make': 'Chevrolet',
                    'model': 'Fusion',
                    'trim': 'LT 1LT',
                    'vehicle_grade': '3.6',
                    'mileage': 20597,
                    'driveTrain': 'FRONT WHEEL DRIVE',
                    'exterior_color': 'Red',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=403956904_0_20180905063609132.jpg',
                    'binPrice': undefined,
                    'current_max_bid': null,
                    'cost_to_market': 0.6727233819090286,
                    'seller': 'SANTANDER (CAP)',
                    'market_day_supply_mmy': null,
                    'state': null,
                    'auction_vendor': 'Off-site',
                    'current_dealer_supply': null,
                    'avg_dealer_type_inv_cnt_mmy': null,
                    'interiorColor': 'White',
                    'vehicle_status': {
                        'status_name': '',
                        'timestamp': null
                    }
                },
                'vehicle_id': '403956906',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '2',
                    'reason_description': 'A similar MMY has recently moved off your lot, it looks like you sell these well.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/recent_success.png',
                    'reason_name': 'Recent Success'
                }]
            },
            {
                'vehicle': {
                    'vin': '1G1PF5S90B7132992',
                    'vehicle_id': '400813061',
                    'year': null,
                    'make': 'Chevrolet',
                    'model': 'Cruze',
                    'trim': 'LT 1LT',
                    'vehicle_grade': null,
                    'mileage': null,
                    'driveTrain': 'FRONT WHEEL DRIVE',
                    'exterior_color': 'RED',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=400813061_0_20180823073504674.jpg',
                    'binPrice': 4500,
                    'seller': 'SANTANDER (CAP)',
                    'state': 'TX',
                    'auction_vendor': 'Off-site',
                    'current_max_bid': 0,
                    'cost_to_market': 0.6727233819090286,
                    'market_day_supply_mmy': 25.3125,
                    'current_dealer_supply': null,
                    'avg_dealer_type_inv_cnt_mmy': 0.02,
                    'interiorColor': null,
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511405
                    }
                },
                'vehicle_id': '400813061',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '3',
                    'reason_description': 'Of today\'s Auction vehicles, this MMY is the most under supplied in your market.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/under_supplied_market.png',
                    'reason_name': 'Under-Supplied Market'
                }]
            },
            {
                'vehicle': {
                    'vin': '1N4AL3AP0DN521064',
                    'vehicle_id': '407992534',
                    'year': 2013,
                    'make': 'Nissan',
                    'model': 'Altima',
                    'trim': '2.5',
                    'vehicle_grade': '3.3',
                    'mileage': null,
                    'driveTrain': 'Front Wheel Drive',
                    'exterior_color': 'BLACK',
                    'state': 'TX',
                    'auction_vendor': 'Off-site',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=407992534_av_4ec54d81-0865-46b8-a074-b03e0ceced3b-Origina.jpg',
                    'binPrice': 0,
                    'seller': 'SANTANDER (CAP)',
                    'current_max_bid': 8300,
                    'cost_to_market': 0.7985025921986366,
                    'market_day_supply_mmy': 22.5,
                    'current_dealer_supply': null,
                    'avg_dealer_type_inv_cnt_mmy': 0.37,
                    'interiorColor': 'Black',
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511406
                    }
                },
                'vehicle_id': '407992534',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '1',
                    'reason_description': 'You are low on this MMY compared to your lot average over the past 90 days.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/low_lot_supply.png',
                    'reason_name': 'Low Lot Supply'
                }]
            },
            {
                'vehicle': {
                    'vin': '3FADP4BJ1FM148762',
                    'vehicle_id': '347118812',
                    'year': 2015,
                    'make': 'Ford',
                    'model': 'Fiesta',
                    'trim': 'SE',
                    'vehicle_grade': null,
                    'mileage': 20597,
                    'driveTrain': 'Front Wheel Drive',
                    'exterior_color': 'SILVER',
                    'seller': 'SANTANDER (CAP)',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=347118812_2333_20180918090749902.jpg',
                    'binPrice': 10500,
                    'current_max_bid': 10200,
                    'state': 'TX',
                    'auction_vendor': 'Off-site',
                    'cost_to_market': 0.8827779777544866,
                    'market_day_supply_mmy': 22.5,
                    'current_dealer_supply': null,
                    'avg_dealer_type_inv_cnt_mmy': 0.08,
                    'interiorColor': 'Black',
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511407
                    }
                },
                'vehicle_id': '347118812',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '1',
                    'reason_description': 'You are low on this MMY compared to your lot average over the past 90 days.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/low_lot_supply.png',
                    'reason_name': 'Low Lot Supply'
                }]
            },
            {
                'vehicle': {
                    'vin': '1C3CDFBB6FD338138',
                    'vehicle_id': '393585031',
                    'year': 2015,
                    'make': 'Dodge',
                    'model': 'Dart',
                    'trim': 'SXT',
                    'vehicle_grade': null,
                    'mileage': 47386,
                    'driveTrain': 'FRONT WHEEL DRIVE',
                    'exterior_color': 'MAROON',
                    'seller': 'SANTANDER (CAP)',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=393585031_0_20180725004634406.jpg',
                    'binPrice': 9500,
                    'state': 'TX',
                    'auction_vendor': 'Off-site',
                    'current_max_bid': 0,
                    'cost_to_market': 0.831978668557973,
                    'market_day_supply_mmy': 19.565217391304348,
                    'current_dealer_supply': null,
                    'avg_dealer_type_inv_cnt_mmy': 0.52,
                    'interiorColor': 'GRAY',
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511408
                    }
                },
                'vehicle_id': '393585031',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '1',
                    'reason_description': 'You are low on this MMY compared to your lot average over the past 90 days.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/low_lot_supply.png',
                    'reason_name': 'Low Lot Supply'
                }]
            },
            {
                'vehicle': {
                    'vin': 'KNDJP3A54F7217336',
                    'vehicle_id': '150853817',
                    'year': 2015,
                    'make': 'Kia',
                    'model': 'Soul',
                    'trim': '+',
                    'vehicle_grade': '4.2',
                    'mileage': 19808,
                    'driveTrain': 'FWD',
                    'exterior_color': 'WHITE',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=150853817_0_20180920094919550.jpg',
                    'binPrice': 13000,
                    'state': 'TX',
                    'auction_vendor': 'Off-site',
                    'current_max_bid': 12500,
                    'seller': 'SANTANDER (CAP)',
                    'cost_to_market': 0.8808893981012618,
                    'market_day_supply_mmy': 18.75,
                    'current_dealer_supply': null,
                    'avg_dealer_type_inv_cnt_mmy': 0.27,
                    'interiorColor': 'black',
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511408
                    }
                },
                'vehicle_id': '150853817',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '1',
                    'reason_description': 'You are low on this MMY compared to your lot average over the past 90 days.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/low_lot_supply.png',
                    'reason_name': 'Low Lot Supply'
                }]
            },
            {
                'vehicle': {
                    'vin': '3FADP4EJ5FM123181',
                    'vehicle_id': '348590599',
                    'year': 2015,
                    'make': 'Ford',
                    'model': 'Fiesta',
                    'trim': 'SE',
                    'vehicle_grade': null,
                    'mileage': 31048,
                    'driveTrain': 'Front Wheel Drive',
                    'exterior_color': 'MAGNETIC METALLIC',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=348590599_2287_20180919160743397.jpg',
                    'binPrice': 9800,
                    'current_max_bid': 9500,
                    'seller': 'SANTANDER (CAP)',
                    'cost_to_market': 0.8392995056538619,
                    'market_day_supply_mmy': 22.5,
                    'current_dealer_supply': null,
                    'state': 'TX',
                    'auction_vendor': 'Off-site',
                    'avg_dealer_type_inv_cnt_mmy': 0.08,
                    'interiorColor': 'Black',
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511409
                    }
                },
                'vehicle_id': '348590599',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '1',
                    'reason_description': 'You are low on this MMY compared to your lot average over the past 90 days.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/low_lot_supply.png',
                    'reason_name': 'Low Lot Supply'
                }]
            },
            {
                'vehicle': {
                    'vin': '1GCVKREH9HZ144091',
                    'vehicle_id': '264778690',
                    'year': 2017,
                    'make': 'Chevrolet',
                    'model': 'Silverado 1500',
                    'trim': 'LT 2LT',
                    'vehicle_grade': '3.6',
                    'mileage': 28176,
                    'driveTrain': '4WD',
                    'seller': 'SANTANDER (CAP)',
                    'exterior_color': 'RED',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=264778690_2632_20180913032919982.jpg',
                    'binPrice': 26100,
                    'state': 'TX',
                    'auction_vendor': 'Off-site',
                    'current_max_bid': 25600,
                    'cost_to_market': 0.8577133989850679,
                    'market_day_supply_mmy': 66.17647058823529,
                    'current_dealer_supply': 7,
                    'avg_dealer_type_inv_cnt_mmy': 9.89,
                    'interiorColor': 'BLACK',
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511410
                    }
                },
                'vehicle_id': '264778690',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '1',
                    'reason_description': 'You are low on this MMY compared to your lot average over the past 90 days.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/low_lot_supply.png',
                    'reason_name': 'Low Lot Supply'
                }]
            },
            {
                'vehicle': {
                    'vin': '3GCUKREC5HG378096',
                    'vehicle_id': '405424325',
                    'year': 2017,
                    'seller': 'SANTANDER (CAP)',
                    'make': 'Chevrolet',
                    'state': 'TX',
                    'auction_vendor': 'Off-site',
                    'model': 'Silverado 1500',
                    'trim': 'LT 2LT',
                    'vehicle_grade': '4.1',
                    'mileage': 10631,
                    'driveTrain': '4WD',
                    'exterior_color': 'BLUE',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=405424325_0_20180911134019585.jpg',
                    'binPrice': 32800,
                    'current_max_bid': 32600,
                    'cost_to_market': 0.8784413321778108,
                    'market_day_supply_mmy': 66.17647058823529,
                    'current_dealer_supply': 7,
                    'avg_dealer_type_inv_cnt_mmy': 9.89,
                    'interiorColor': 'black',
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511410
                    }
                },
                'vehicle_id': '405424325',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '1',
                    'reason_description': 'You are low on this MMY compared to your lot average over the past 90 days.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/low_lot_supply.png',
                    'reason_name': 'Low Lot Supply'
                }]
            },
            {
                'vehicle': {
                    'vin': '3GCUKSEC2HG333074',
                    'vehicle_id': '407328764',
                    'year': 2017,
                    'make': 'Chevrolet',
                    'model': 'Silverado 1500',
                    'trim': 'LTZ 1LZ',
                    'vehicle_grade': '5.0',
                    'state': 'TX',
                    'auction_vendor': 'Off-site',
                    'mileage': 12837,
                    'driveTrain': '4 Wheel Drive',
                    'exterior_color': 'WHITE',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=DLEICtU59qdC_WOd6SxvxnvQFP9MJ6nxC9A4jF0jOhA.jpg',
                    'binPrice': 0,
                    'current_max_bid': 36500,
                    'seller': 'SANTANDER (CAP)',
                    'cost_to_market': 0.8797946200528991,
                    'market_day_supply_mmy': 66.17647058823529,
                    'current_dealer_supply': 7,
                    'avg_dealer_type_inv_cnt_mmy': 9.89,
                    'interiorColor': 'Grey',
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511411
                    }
                },
                'vehicle_id': '407328764',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '1',
                    'reason_description': 'You are low on this MMY compared to your lot average over the past 90 days.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/low_lot_supply.png',
                    'reason_name': 'Low Lot Supply'
                }]
            },
            {
                'vehicle': {
                    'vin': '3FADP4AJ8FM190993',
                    'vehicle_id': '358098140',
                    'year': 2015,
                    'make': 'Ford',
                    'model': 'Fiesta',
                    'trim': null,
                    'vehicle_grade': null,
                    'mileage': 22942,
                    'driveTrain': 'Front Wheel Drive',
                    'state': 'TX',
                    'auction_vendor': 'Off-site',
                    'exterior_color': 'INGOT SILVER METALLIC',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=358098140_2405_20180919110834076.jpg',
                    'binPrice': 8400,
                    'current_max_bid': 8100,
                    'cost_to_market': 0.7425126230857974,
                    'market_day_supply_mmy': 22.5,
                    'current_dealer_supply': null,
                    'seller': 'SANTANDER (CAP)',
                    'avg_dealer_type_inv_cnt_mmy': 0.08,
                    'interiorColor': 'Gray',
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511414
                    }
                },
                'vehicle_id': '358098140',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '1',
                    'reason_description': 'You are low on this MMY compared to your lot average over the past 90 days.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/low_lot_supply.png',
                    'reason_name': 'Low Lot Supply'
                }]
            },
            {
                'vehicle': {
                    'vin': '3FADP4AJ0FM220410',
                    'vehicle_id': '362498583',
                    'year': 2015,
                    'make': 'Ford',
                    'model': 'Fiesta',
                    'trim': null,
                    'vehicle_grade': null,
                    'mileage': 17567,
                    'driveTrain': 'Front Wheel Drive',
                    'exterior_color': 'TUXEDO BLACK METALLIC',
                    'state': 'TX',
                    'auction_vendor': 'Off-site',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=362498583_2296_20180919120752610.jpg',
                    'binPrice': 9400,
                    'current_max_bid': 9100,
                    'seller': 'SANTANDER (CAP)',
                    'cost_to_market': 0.8079697801556502,
                    'market_day_supply_mmy': 22.5,
                    'current_dealer_supply': null,
                    'avg_dealer_type_inv_cnt_mmy': 0.08,
                    'interiorColor': 'Gray',
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511415
                    }
                },
                'vehicle_id': '362498583',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '1',
                    'reason_description': 'You are low on this MMY compared to your lot average over the past 90 days.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/low_lot_supply.png',
                    'reason_name': 'Low Lot Supply'
                }]
            },
            {
                'vehicle': {
                    'vin': '3FADP4BJ0FM123237',
                    'vehicle_id': '373076525',
                    'year': 2015,
                    'make': 'Ford',
                    'model': 'Fiesta',
                    'trim': 'SE',
                    'vehicle_grade': null,
                    'mileage': 26744,
                    'driveTrain': 'Front Wheel Drive',
                    'state': 'TX',
                    'auction_vendor': 'Off-site',
                    'exterior_color': 'RUBY RED METALLIC CC',
                    'thumbnail': 'http://adesa.kar-media.com/display.php?img=373076525_2326_20180918140906745.jpg',
                    'binPrice': 9900,
                    'current_max_bid': 9600,
                    'cost_to_market': 0.8256872653741747,
                    'market_day_supply_mmy': 22.5,
                    'current_dealer_supply': null,
                    'seller': 'SANTANDER (CAP)',
                    'avg_dealer_type_inv_cnt_mmy': 0.08,
                    'interiorColor': 'Black',
                    'vehicle_status': {
                        'status_name': 'Auction',
                        'timestamp': 1537902511416
                    }
                },
                'vehicle_id': '373076525',
                'atc_org_id': '186363',
                'badges': [{
                    'reason_id': '1',
                    'reason_description': 'You are low on this MMY compared to your lot average over the past 90 days.',
                    'reason_badge': 'https://assets.drivindealer.com/images/badges/low_lot_supply.png',
                    'reason_name': 'Low Lot Supply'
                }]
            }
        ]
    }
};


module.exports.mockFormattedDrivinResponse = mockFormattedDrivinResponse;