import 'package:flutter/material.dart';

import 'package:final_version/models/farmer.dart';
import 'package:final_version/pages/farmer_view_page.dart';

class FarmerListPage extends StatelessWidget {
  final List<Farmer> farmers = const <Farmer>[
    Farmer(
      '1',
      'Yuichiro',
      'Nagano',
      'Spinach, Nuts',
      AssetImage('images/farmer-1.jpg'),
    ),
    Farmer(
      '2',
      'Yuki Sano',
      'Niigata',
      'Potatoes, Nuts',
      AssetImage('images/farmer-2.jpg'),
    ),
    Farmer(
      '3',
      'Hitomi',
      'Yamagata',
      'Onions, Garlic',
      AssetImage('images/farmer-3.jpg'),
    ),
  ];

  const FarmerListPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final ButtonStyle style = ElevatedButton.styleFrom(
      textStyle: const TextStyle(fontSize: 20),
    );
    return Scaffold(
      appBar: AppBar(
        title: Text('Farmers'),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(8),
        itemCount: farmers.length,
        itemBuilder: (BuildContext context, int index) {
          return InkWell(
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (context) =>
                        FarmerViewPage(farmer: farmers[index])),
              );
            },
            child: Container(
              height: 50,
              margin: EdgeInsets.all(4),
              child: ListTile(
                leading: Image(
                  image: farmers[index].image,
                  fit: BoxFit.cover,
                  width: 100,
                ),
                title: Text('${farmers[index].name}'),
                subtitle: Text('${farmers[index].favorites}'),
                trailing: Text('${farmers[index].location}'),
              ),
            ),
          );
        },
      ),
    );
  }
}
