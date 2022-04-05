import 'package:flutter/material.dart';

import 'package:final_version/models/farmer.dart';
import 'package:final_version/widgets/profile_detail.dart';

class FarmerViewPage extends StatelessWidget {
  final Farmer farmer;

  const FarmerViewPage({Key? key, required this.farmer}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final ButtonStyle style = ElevatedButton.styleFrom(
      textStyle: const TextStyle(fontSize: 20),
    );
    return Scaffold(
      appBar: AppBar(
        title: Text('${farmer.name}'),
      ),
      body: Container(
        padding: const EdgeInsets.all(8),
        child: Column(
          children: [
            Row(
              children: [
                Expanded(
                  flex: 4,
                  child: Image(
                    image: farmer.image,
                    fit: BoxFit.cover,
                    width: 150,
                  ),
                ),
                Expanded(
                  flex: 6,
                  child: Container(
                    width: double.infinity,
                    margin: const EdgeInsets.only(left: 10),
                    alignment: Alignment.topLeft,
                    child: Column(
                      children: [
                        ProfileDetail(title: 'Name: ', content: farmer.name),
                        ProfileDetail(
                            title: 'Location: ', content: farmer.location),
                        ProfileDetail(
                            title: 'Favorites: ', content: farmer.favorites),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
